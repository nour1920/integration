import { ObjectId } from "mongodb";


export async function getProfilCompanyController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'company ID is required' });
    }

    const result = await db.collection('CompanyProfile').findOne({
      _id: new ObjectId(id)
    });

    if (!result) {
      return res.status(404).json({ message: 'company not found' });
    }

    res.status(200).json({
      message: " company retrieved",
      company: result
    });

  }
  catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}