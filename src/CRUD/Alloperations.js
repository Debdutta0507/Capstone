import axios from "axios";
import React from "react";
import { v4 as uuid } from 'uuid';

class Alloperations extends React.Component {
    static async getAllProducts() {
        try {
            const res = await axios.get("http://localhost:3001/PList");
            return res.data;
        } catch (error) {
            return error;
        }
    }

    static async addProduct(product) {
        try {
            product.id = uuid().slice(0,8);
            const res = await axios.post("http://localhost:3001/PList", product);
            return res.data;
        } catch (error) {
            return error;
        }
    }

    static async updateProductById(id, product) {
        try {
            const res = await axios.put(`http://localhost:3001/PList/${id}`, product);
            return res.data;
        } catch (error) {
            return error;
        }
    }

    static async getProductById(id) {
        try {
            const res = await axios.get("http://localhost:3001/PList/" + id);
            return res;
        } catch (error) {
            return error;
        }
    }

    static async deleteProductById(id) {
        try {
            const res = await axios.delete(`http://localhost:3001/PList/${id}`);
            return res;
        } catch (error) {
            return error;
        }
    }

    static async deleteProductByIds(ids) {
        try {
            if (ids.length > 1) {
                await Promise.all(ids.map(async (id) => {
                    const res = await axios.delete(`http://localhost:3001/PList/${id}`);
                    const resp = [];
                    return resp.push(res);
                }));
            } else {
                const res = await axios.delete(`http://localhost:3001/PList/${ids}`);
                return res;
            }
        } catch (error) {
            return error;
        }
    }

    static async updateProductCountById(id, data) {
        try {
            const res = await axios.put(`http://localhost:3001/PList/${id}`, data);
            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export default Alloperations;