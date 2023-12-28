/*

export async function createJobOffreController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { createdby, type, name,  } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    if (phone && phone.length > 10) {
      return res.status(400).json({ message: 'Phone number cannot be longer than 10 digits' });
    }
    
    if (address && address.length > 100) {
      return res.status(400).json({ message: 'Address must be less than 100 characters' });
    }

    // check if customer exists

    const existingOffre = await db.collection('offres').findOne({
      email: email.toLowerCase()
    });

    if (existingOffre) {
      return res.status(400).json({ message: 'Offer already exists' });
    }

    const result = await db.collection('offres').insertOne({
      name,
      email: email.toLowerCase(),
      phone,
      address
    });

    if (result.acknowledged) {
      res.status(200).json({ message: 'Offer created' });
    } else {
      throw new Error('Offer not created');
    }

  }
  catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.toString() });
  }
}*/