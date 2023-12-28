import { ObjectId } from "mongodb";


export async function getProfileController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'condiadat ID is required' });
    }

    const result = await db.collection('condidatProfile').findOne({
      _id: new ObjectId(id)
    });

    if (!result) {
      return res.status(404).json({ message: 'condidat not found' });
    }

    res.status(200).json({
      message: "condidat retrieved",
      condidat: result
    });

  }
  catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}