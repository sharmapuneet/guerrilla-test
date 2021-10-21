import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Select, MenuItem } from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import PropertyItem from "../PropertyItem/PropertyItem";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 150
  },
  sectionHeading: {
    color: "#1E3240"
  },
  subHeading: {
    color: "#BDBDBD",
    paddingBottom: 84
  }
}));

const query = gql`
 query {
   propertyCollection(limit:6) {
     items {
       id
       title
       address
       category
       image {
         url
       }
     }
   }
 }
 `;

const categories = [
  "Apartment",
  "House",
  "Penthouse",
  "Villa"
]

const PropertiesListing = () => {
  const classes = useStyles();

  const { data, loading, error } = useQuery(query);

  const [propertyData , setPropertyData] = useState([]);
  const [category, setCategory] = useState("");

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
    setPropertyData(data.propertyCollection.items.filter(x => x.category === event.target.value));
  };

  const newData = propertyData.length > 0 ? propertyData : data.propertyCollection.items

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={10}>
          <Typography variant="h3" className={classes.sectionHeading}>Properties</Typography>
          <Typography variant="subtitle1" className={classes.subHeading}>Turpis facilisis tempor pulvinar in lobortis ornare magna.</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {categories.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>{item}</MenuItem>
              )
            })}
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {newData.map(( item, index ) => {
          const { image, address, title } = item;

          return (
            <Grid item sm={4} xs={12} key={index}>
              <PropertyItem image={image.url} address={address} title={title} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

export default PropertiesListing;
