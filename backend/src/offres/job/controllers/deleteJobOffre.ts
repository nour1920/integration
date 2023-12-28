import { ObjectId } from "mongodb";

export async function deleteJobOffreController(req: any, res: any) {
  try {
    const { db } = req.app;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Job Offer ID is required' });
    }

    const result = await db.collection('offres').deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Job Offer not found' });
    }

    res.status(200).json({ message: 'Job Offer deleted' });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}
