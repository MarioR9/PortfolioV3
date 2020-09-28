import React, {useState} from "react";
import "../css/Portfolio.css";
import translateme from "../assets/translateme.png";
import rickandmorty1 from "../assets/rickMorty1.png";
import tonester from "../assets/tonester.png";
import uber from "../assets/uber.png";
import portfoliov1 from "../assets/portfoliov1.png";
import portfoliov2 from "../assets/portfoliov2.png";
import marsrover from "../assets/marsrover.png";
import portfoliov3 from "../assets/portfoliov3.png";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Container } from "react-bootstrap";

const Portfolio = () => {
  const pages = [
    translateme,
    tonester,
    uber,
    portfoliov1,
    rickandmorty1,
    portfoliov2,
    marsrover,
    portfoliov3,
  ];

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = {
                translateme:{ Title: "Translateme", description: "Translate me uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.", technologies:['Javascript','React','RubyonRails', 'IBMWatson','Cloudinary','SemanticUI'],images:['https://raw.githubusercontent.com/MarioR9/TranslateMeFrontend/master/ReadmeImages/main.png','https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categories.png','https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categoryCards.png','https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/selectLanguage.png']},
                rickandMorty:{ Title: "rickandMorty", description: "", technologies:[],images:[]}, 
              }
  return (
    <div id="portfolio">
      <Container
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <Container>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            contente Here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
        </Dialog>
        </Container>
        <div className="portfolio">
          <div className="portfolio__header">
            <h3>Recent Projects</h3>
          </div>
          <div className="portfolio__grid">
            {pages.map((page) => (
              <ul
                data-aos="zoom-in"
                data-aos-delay="30"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                data-aos-duration="1200"
                key={page}
              >
                <img onClick={handleClickOpen} className="portfolio__img" src={page} alt={page} />
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Portfolio;
