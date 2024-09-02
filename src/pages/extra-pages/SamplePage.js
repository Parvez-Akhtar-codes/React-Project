// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import fetchGetData from 'client/client';

const apiUrl = 'http://localhost:8080/api/v1';

fetchGetData(apiUrl)
.then(res => {
  console.log('Data: ' , res.data);
})
.catch(error => {
  console.error('Error in .then: ', error.message);
});

const SamplePage = () => (
  <MainCard title="Sample Card">
    <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
  </MainCard>
);

export default SamplePage;
