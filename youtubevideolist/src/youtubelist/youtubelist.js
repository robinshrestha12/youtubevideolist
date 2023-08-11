import React, {useState, useEffect} from "react";
import {Card, Container, Row, Column} from 'react-bootstrap';


function youtubevideolist (){
  const [video, setVideo] = useState([]);
  
  useEffect(() =>{
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=YOUR_PLAYLIST_ID&key=YOUR_API_KEY')
})
}