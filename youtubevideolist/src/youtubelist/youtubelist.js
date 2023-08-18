import React, {useState, useEffect} from "react";
import {Card, Container, Row, Column} from 'react-bootstrap';


function youtubevideolist (){
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUR_YOUTUBE_API_KEY
  useEffect(() => {
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=YOUR_PLAYLIST_ID&key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              setVideos(data.items);
          })
          .catch(error => console.error('Error fetching YouTube videos:', error));
  }, []);

  return (
      <Container className="newspaper-style">
          <Row>
              {videos.map(video => (
                  <Col md={4} key={video.id}>
                      <Card>
                          <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
                          <Card.Body>
                              <Card.Title>{video.snippet.title}</Card.Title>
                              <Card.Text>
                                  {video.snippet.description}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  );
}

export default youtubevideolist;