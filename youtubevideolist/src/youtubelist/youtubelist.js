import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';


function Youtubevideolist() {
    const [videos, setVideos] = useState([]);
    const apiKey = process.env.REACT_APP_YOUR_YOUTUBE_API_KEY;
    const playlistid = process.env.REACT_APP_YOUR_YOUTUBE_PLAYLIST_ID;
    console.log(apiKey);
    console.log(playlistid);
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistid}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setVideos(data.items);
                console.log(data);
            })
            .catch(error => console.error('Error fetching YouTube videos:', error));
    }, []);

    return (
        <Container className="newspaper-style">
            <Row>
                {videos.map(video => (
                    <Col md={4} key={video.id}>
                        <Card >

                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
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

export default Youtubevideolist;