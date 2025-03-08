import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }){
    const INIT_URL = "https://th.bing.com/th/id/OIP.I16WoD1jsDX42vY7dEi7tQHaE7?rs=1&pid=ImgDetMain";

    let cold_url =   "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

let hot_url =
  "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=612x612&w=0&k=20&c=1aaFLIWH15zSWmnenmL50XfkiU0sUboEKpIXf3Jx5S0=";

let rain_url =
  "https://media.istockphoto.com/id/1312863262/photo/rainy-day.jpg?s=612x612&w=0&k=20&c=n6dI4UpiwHF2jDaeefb4ZLyg6Blx4n7zqO4_yXdpVh8=";

    return(
        <>
        <div className="Info">
     
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
          ? rain_url
          : info.temp > 15
          ? hot_url
          : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography variant="body2" color = "text.secondary" component={"span"} >
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity= {info.humidity}</p> 
           <p>MinTemp = {info.tempMin}&deg;C</p>
           <p>MaxTemp = {info.tempMax}&deg;C</p>
           <p>The Weather feelsLike = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
        </>
    )
}