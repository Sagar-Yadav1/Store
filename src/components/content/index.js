import React from 'react';
import styles from './style.module.css';
import { Container, Row } from 'react-bootstrap';

const Content = ({tag, tag1, title, desciption, mention}) => {
  return (
    <Container>
        <Row>
            <div className={styles.newsfeed_content}>
                <div className={styles.news_tag}>
                    <p>{tag}</p>
                </div>
                <div className={styles.news_tag1}>
                    <p>{tag1}</p>
                </div>
                <div className={styles.news_title}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.news_description}>
                    <p>{desciption}</p>
                </div>
                <div className={styles.news_mention}>
                    <h6>{mention}</h6>
                </div>
            </div>
        </Row>
    </Container>
  );
}

export default Content;