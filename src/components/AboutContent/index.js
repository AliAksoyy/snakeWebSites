import React from "react";
import styles from "./styles.module.scss";
import contentImg from "../../assets/aboutImage/contentImg.png";

const AboutContent = () => {
  return (
    <div className={styles.container}>
      <h4>Who are we as the Mooxer Games family?</h4>
      <p className="subtile2Light">
        Mooxer Games is an Austria-based game company. With our talented team,
        we aim to create a fun and supportive community by bringing people
        together from all around the world through our passion and dedication to
        game development.
      </p>
      <img className={styles.image} src={contentImg} alt="contentImg" />
      <h4>Why we are here?</h4>
      <p className="subtile2Light">
        Mooxer Games was founded with the idea that entertainment and fun are
        the best ways to reach people. While doing our work, we want to create a
        fun and supportive environment for ourselves and extend this environment
        to people. Our main goal is for people to remember us and the games we
        create in a positive light, while also including themselves in those
        memories.
      </p>
      <p className="subtile2Light">
        We embarked on this journey with the belief that games are the right
        thing to achieve our goal. With this belief, we work to create
        innovative and unforgettable experiences to bring people together in a
        fun and supportive community. To bring these ideas come true, we, as a
        team, are the first to work in a fun and supportive family environment.
        Each of us combines creativity and technology, not only in developing
        games but also in fostering friendships along the way.
      </p>
      <p className="subtile2Light">
        Ultimately, we want to invite everyone to join us on this journey we've
        started and continue to grow as a supportive and fun community. Join the
        Mooxer Games family and enjoy the fun with us. We are working to offer
        more surprises and joy in the future. We would be delighted to see you
        among us.
      </p>
      <p className="subtile2Light">
        With Mooxer Games, join the world of games.
      </p>
    </div>
  );
};

export default AboutContent;
