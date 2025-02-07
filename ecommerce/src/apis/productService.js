import axiosClient from '@apis/axiosClient';

const getProducts = async () => {
    const response = await axiosClient.get('/product');
    console.log(response.data);

    //return response.data;
};

export { getProducts };
