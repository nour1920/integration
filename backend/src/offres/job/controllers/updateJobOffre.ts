import { ObjectId } from "mongodb";

export async function updateJobOffreController(req: any, res: any) {
  try {
    const { db } = req.app;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Job Offer ID is required' });
    }

    const { newData } = req.body;

    if (!newData) {
      return res.status(400).json({ message: 'New job offer data is required for the update' });
    }

    const result = await db.collection('offres').updateOne(
      { _id: new ObjectId(id) },
      { $set: newData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Job Offer not found' });
    }

    res.status(200).json({ message: 'Job Offer updated' });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}
