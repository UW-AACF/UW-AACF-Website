"use client";

import React, { useState, useRef } from 'react';
import {
  useJsApiLoader, 
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api"
import AACFMarker from '../images/google-maps/aacf_marker.png'
import SmallGroupMarker from '../images/google-maps/small_group_marker.png'
import PopMarker from '../images/google-maps/pop_marker.png'


import { Box, Flex, HStack, IconButton, Input, ButtonGroup, Text } from '@chakra-ui/react'

import Layout from '../components/layout';
import Head from '../components/head';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { FaTimes, FaLocationArrow } from 'react-icons/fa';

import * as styles from './announcements.module.scss';

const center = { lat: 47.65647613791742, lng: -122.30747451791134}

function Announcements() {
    const {isLoaded} = useJsApiLoader({
      googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
      libraries: ['places']
    });

    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const originRef = useRef()
    const destinationRef = useRef()

    // Debugging to check if google maps api is loaded
    if (!isLoaded) {
      return <div>Loading...</div>
    }

    async function calculateRoute() {
      if (originRef.current.value === '' || destinationRef.current.value === '') {
        return
      }
      const directionService = new window.google.maps.DirectionsService()
      const results = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: window.google.maps.TravelMode.WALKING
      })

      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destinationRef.current.value = ''
    }

    function recenterMap() {
      map.setCenter(center)
    }

    


    return (
        <Layout>
            <Head title="Announcements" />
            <div className={[styles.container, "mb-5"].join(' ')}>
            <div className={styles.grayBackground}>
              <Container>
                <Row className="mt-3">
                  <Col>
                    <h1>ANNOUNCEMENTS</h1>
                  </Col>
                </Row>
                <Row className="">
                  <Col sm={12} md={8}>
                    <p>Stay updated on the latest AACF events. We have events almost every day of the week so don't miss out!</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
            <div>
                <Container fluid className={styles.centerContainer}>
                <Row className="justify-content-center">
                    <Col sm={12} md={8} className="text-center">
                    <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dXdhYWNmQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=b25tMDZxdmJpampsMm82dDZpZjExdXRiYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19xaWxtZ3VlbzgycnM5dTRub2U3c3Y1dGNwa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWFjZi51d3NlYXR0bGVAYWFjZi5vcmc&color=%23E67C73&color=%2333B679&color=%23039BE5&color=%23C0CA33&color=%23AD1457" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    {/* <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=c3VuZ2gxNDA0QGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} md={8} className="text-center">
                      {/* Google Map */}
                      <div style={{ height: '500px', width: '100%' }}>
                            <GoogleMap 
                            center={center} 
                            zoom={15} 
                            mapContainerStyle={{width: "100%", height: "100%"}}
                            onLoad={(map) => setMap(map)}>
                            
                            {/* TODO: MATTHEW, this is an example of how to make a custom marker. For position, make sure to give it a latitude and longitude (See center var) */}
                            <Marker 
                              position={center}
                              animation={window.google.maps.Animation.DROP}
                              options={{
                                icon: AACFMarker
                              }}/>
                            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                            </GoogleMap>
                      </div>
                      {/* Create a simple UI containing two input text boxes for origin and destination and a button that calculates the route, a button that recenters the map, and a button that clears the route */}
                      <Flex
                        position='relative'
                        flexDirection='column'
                        alignItems='center'
                        style={{height: '100vh', width: '100vw', right: 230}}

                      >
                        <Box 
                          p={4}
                          borderRadius='lg'
                          m={8}
                          bgColor='white'
                          shadow='base'
                          minW='40%'
                          
                        >
                          <HStack spacing={4} mt={4}>
                            <Autocomplete>
                              <Input ref={originRef} placeholder="Origin" />
                            </Autocomplete>
                            <Autocomplete>
                              {/* Instead of making this one an input, just put the destination as this value: Smith Hall (SMI), Skagit Lane, Seattle, WA */}
                              <Input ref={destinationRef} value="Smith Hall (SMI), Skagit Lane, Seattle, WA" />
                            </Autocomplete>
                            <ButtonGroup variant="outline" spacing={4}>
                              <Button colorScheme='pink' type='submit' onClick={calculateRoute}>Calculate Route</Button>
                              <IconButton
                                aria-label="Clear route"
                                icon={<FaTimes />}
                                onClick={clearRoute}
                              />
                            </ButtonGroup>
                          </HStack>
                          <HStack spacing={4} mt={4} justifyContent='space-between'>
                              <Text>Distance: {distance}</Text>
                              <Text>Duration: {duration} </Text>
                              <IconButton
                                aria-label='Recenter Map'
                                icon={<FaLocationArrow />}
                                isRound
                                onClick={recenterMap}
                              />
                          </HStack>
                        </Box>
                      </Flex>
                    </Col>
                </Row>
                </Container>
            </div>

        </Layout>
    );
}


export default Announcements;
