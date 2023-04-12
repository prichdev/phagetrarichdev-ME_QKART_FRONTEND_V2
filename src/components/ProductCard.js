import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  // console.log("product", product);
  return (
    <Card className="card">
      <CardMedia  component="img" style={{ height: "140px" }} image={product.image} alt={product._id}/>
      <CardContent>
        <Typography colour="textSecondary" variant="h6">
          {product.name}
        </Typography>
        <Typography colour="textSecondary" variant="h6">
          ${product.cost}
        </Typography>
        <Typography>
          <Rating name="read-only" value={product.rating} readOnly />
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          className="card-button"
          fullWidth
          onClick={handleAddToCart}
          name="add to cart"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
