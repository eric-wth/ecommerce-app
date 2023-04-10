import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        orderId: { type: String },
        customerId: { type: String },
        amount: { type: Number, default: 'Ksh _' },
        status: { type: String },
        items: [
            {
                product: {
                    _id: { type: String, required: true },
                    name: { type: String },
                    description: { type: String },
                    unit: { type: Number },
                    price: { type: String }                
                }
            }
        ]
    }
);

export const OrderModel = mongoose.model('OrderModel', orderSchema);