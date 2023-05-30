import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const ImageGallery = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get(
                `https://pixabay.com/api/?key=36164790-3b06d71b56c63cad364a2fa13&q=${encodeURIComponent(category)}&image_type=photo`
            );
            setImages(response.data.hits);
        };

        fetchImages();
    }, [category]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {images.map(image => (
                <Image
                    key={image.id}
                    source={{ uri: image.webformatURL }}
                    style={styles.image}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    image: {
        width: '48%',
        height: 200,
        marginBottom: 10,
    },
});

export default ImageGallery;