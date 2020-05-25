const express = require('express');
const router = express.Router();
const axios = require('axios');
const logger = require('../logger');

/* GET home page. */
router.get('/seasons/episodes', function(req, res, next) {
  console.log("getting seasons is in process");
  axios.get('http://stapi.co/api/v1/rest/episode/search')
    .then(response => {
      const episodes = response.data.episodes;
      let groups = [];

      if (episodes.length) {
        const groupedSeasons = episodes.reduce((result, cv) => {
          (result[cv["season"].title] = result[cv["season"].title] || []).push(cv);
          return result;
        }, {});
        groups = Object.keys(groupedSeasons).map((key) => {
          const episodes = groupedSeasons[key].map((episode) => {
            return ({
                episodeUid: episode.uid,
                episodeTitle: episode.title,
                episodeNumber: episode.episodeNumber,
                episodeSerialNumber: episode.productionSerialNumber
            })
          })
          return {season: key, episodes};
        });
      }
      res.send(groups);
    })
    .catch(error => {
      console.log(error);
    });
});

router.post('/episodes/:uid/comment', function(req, res, next) {
  console.log('comment posting is in process');
  axios.get(`http://stapi.co/api/v1/rest/episode?uid=${req.params.uid}`)
    .then(response => {
      const episode = response.data.episode;
      const data = {
        episodeUid: episode.uid,
        episodeTitle: episode.title,
        episodeNumber: episode.episodeNumber,
        episodeSerialNumber: episode.productionSerialNumber,
        comment: req.body.comment
      };
      logger.info(data);
      res.send({ status: 200, message: "OK" });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
