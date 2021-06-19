import classes from './About.module.css';
// import 'bootstrap/dist/css/bootstrap.css';


const About = () => { 
  return ( 
    <div className={classes.main}>
      <div className={classes.header}>
        <h1 className={classes.h1}>About Us</h1>
        <div className={classes.paraAbout}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
        </div>
      </div>

      <div className={classes.content}>
          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fas fa-users"></i></div>
            <div className={classes.heading}>user friendly</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fas fa-university"></i></div>
            <div className={classes.heading}>Infrastructure</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fas fa-user-shield"></i></div>
            <div className={classes.heading}>Security</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fas fa-trophy"></i></div>
            <div className={classes.heading}>Awards</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fas fa-award"></i></div>
            <div className={classes.heading}>Achivements</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.aboutIcon}><i className="fa fa-line-chart"></i></div>
            <div className={classes.heading}>Growth</div>
            <div className={classes.commentAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio.
            </div>
          </div>


      </div>

    </div>
  );
};

export default About;
