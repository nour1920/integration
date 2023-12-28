import { ObjectId } from "mongodb";

export async function updateProfilCompanyController(req: any, res: any) {
  try {
    const { db } = req.app;
    const { id } = req.params;

    if (!id || typeof id !== 'string' || id.trim() === '') {
      return res.status(400).json({ message: 'company ID is required' });
    }

    // Extract the update data from the request body (assuming JSON data is sent in the request).
    const { newData } = req.body;

    if (!newData) {
      return res.status(400).json({ message: 'New company data is required for the update' });
    }

    // Attempt to update the customer by ID.
    const result = await db.collection('CompanyProfile').updateOne(
      { _id: new ObjectId(id) },
      { $set: newData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json({ message: 'Company updated' });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}
