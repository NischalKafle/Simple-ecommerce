import React, { useState, useEffect } from "react";
import { addItem } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";


function Product() {
  const dispatch = useDispatch();
  const productsCart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const addingToCart = (product) => {
    const isProductInCart = productsCart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      dispatch(addItem(product));
    }
  };

  return (

    
    <div style={{ marginTop: "5px", marginBottom: "5px" }}>
      <div style={{ alignItems: "center", margin: "5px" }}>
        <input
          style={{ width: "300px", padding: "2px" }}
          type="text"
          placeholder="Search.."
          name="search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit" style={{ padding: "2px" }}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div
        className="row row-cols-1 row-cols-md-3"
        style={{ marginLeft: "5px", marginRight: "5px" }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            maxW="sm"
            style={{ border: "1px gray solid", padding: "2px" }}
          >
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  objectFit="cover"
                  style={{ height: "150px" }}
                  src={product.image}
                  alt={product.title}
                />
                <Heading size="md">{product.title}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  Price: ${product.price}
                </Text>
              </Stack>
              <button
                style={{ margin: "1.5px" }}
                type="button"
                onClick={() => addingToCart(product)}
                class="btn btn-success"
              >
                Add to cart
              </button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
