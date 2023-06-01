import React from 'react'
import { useState,useEffect } from 'react'
import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Button, ButtonGroup } from '@chakra-ui/react'
function Product() {
    const [products,getProducts]=useState([]);
    useEffect(
        ()=>{
            fetch('https://fakestoreapi.com/products?limit=8')
            .then(data => data.json())
            .then(result => getProducts(result));      
        }
    )
    return (
        <div style={{ marginTop: '5px', marginBottom:'5px'}}>
            <div className="row row-cols-1 row-cols-md-3 " style={{  marginLeft: '5px', marginRight: '5px' }}>
              {products.map(product => (
                <Card maxW='sm' style={{ border: '1px gray solid', padding: '2px', }}>
                  <CardBody>
                    <Stack mt='6' spacing='3'>
                      <Image
                        objectFit='cover'
                        style={{ height: '150px' }}
                        src={product.image}
                        alt='Caffe Latte'
                      />
                      <Heading size='md'>{product.title}</Heading>
                      <Text color='blue.600' fontSize='2xl'>
                        Price:{product.price}
                      </Text>
                    </Stack>
                    <button type="button" className="btn btn-primary" style={{ margin: '1.5px' }}>
                      Add to cart
                    </button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        
      );
      
          }
export default Product