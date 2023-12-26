import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Link} from 'react-router-dom'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='m-2'>
    
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: props.color }} aria-label="recipe">
        </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={`Rating: ${props.rating}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, aspernatur repellendus, magni veritatis, quidem earum quo voluptas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
        <button className='bg-blue-500 p-1 m-1 rounded border border-gray-300 text-white text-xs'><Link to='/admission'>Admissions</Link></button>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detail:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nemo eveniet! Tempore, ad minus obcaecati inventore pariatur consectetur culpa illum veniam, eligendi delectus incidunt ratione?
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae animi molestias ipsum ipsam. Mollitia praesentium hic excepturi suscipit eaque tenetur corrupti, perspiciatis illo, provident beatae eum ratione quo facere.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur delectus id qui doloremque totam vero quo eos sapiente cumque adipisci, rem consequatur illo quidem suscipit obcaecati explicabo quia eius?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}