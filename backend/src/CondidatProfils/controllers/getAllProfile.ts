export async function getAllProfileController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const result = await db.collection('condidatProfile').find().toArray();
  
      res.status(200).json({
        message: "condidat Profile retrieved",
        customers: result
      });
  
    }
    catch (error) {
        const typedError = error as Error;
        res.status(500).json({ error: typedError.toString() });
      }
  }