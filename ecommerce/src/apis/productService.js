import axiosClient from '@apis/axiosClient';

const getProducts = async () => {
    const response = await axiosClient.get('/product');

    return response.data;
};

export { getProducts };
