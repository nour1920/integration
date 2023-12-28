export async function getAllJobOffresController(req: any, res: any) {
  try {
    const { db } = req.app;

    const result = await db.collection('offres').find().toArray();

    res.status(200).json({
      message: "Job Offers retrieved",
      jobOffers: result
    });

  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}
