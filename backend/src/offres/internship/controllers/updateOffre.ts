/*import { ObjectId } from "mongodb";

export async function updateCustomerController(req: any, res: any) {
  try {
    const { db } = req.app;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Customer ID is required' });
    }

    // Extract the update data from the request body (assuming JSON data is sent in the request).
    const { newData } = req.body;

    if (!newData) {
      return res.status(400).json({ message: 'New customer data is required for the update' });
    }

    // Attempt to update the customer by ID.
    const result = await db.collection('customers').updateOne(
      { _id: new ObjectId(id) },
      { $set: newData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer updated' });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}


/*
to update customer
{
  "newData": {
    "name": "Updated Name",
    "email": "updated.email@example.com",
    "phone": "1234567890",
    "address": "Updated Address"
  }
}
*/