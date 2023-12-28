

export async function createJobOffreController(req: any, res: any) {
  try {
    const { db } = req.app;

    const {companyName, companyEmail, companyPhone, companyAddress, name, postDate, startDate, nbrPost, generalInformation, responsibilities, requirements, commitment, salary} = req.body;

    if (!companyName) {
      return res.status(400).json({ message: 'Company Name is required' });
    }
    
    if (!companyEmail) {
      return res.status(400).json({ message: 'Company Email is required' });
    }
    
    if (!companyAddress) {
      return res.status(400).json({ message: 'Company Address is required' });
    }
    
    if (companyAddress.length > 100) {
      return res.status(400).json({ message: 'Company Address must be 100 characters or fewer' });
    }
    
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    
    if (!postDate) {
      return res.status(400).json({ message: 'Post Date is required' });
    }
    
    if (!startDate) {
      return res.status(400).json({ message: 'Start Date is required' });
    }
    
    if (!nbrPost) {
      return res.status(400).json({ message: 'Number of Posts is required' });
    }
    
    if (!generalInformation) {
      return res.status(400).json({ message: 'General Information is required' });
    }
    
    if (!responsibilities) {
      return res.status(400).json({ message: 'Responsibilities are required' });
    }
    
    if (!requirements) {
      return res.status(400).json({ message: 'Requirements are required' });
    }
    
    if (!commitment) {
      return res.status(400).json({ message: 'Commitment is required' });
    }
    
    if (!salary) {
      return res.status(400).json({ message: 'Salary is required' });
    }
    

    // check if offer exists

    /*const existingOffre = await db.collection('offres').findOne({
      email: email.toLowerCase()
    });

    if (existingOffre) {
      return res.status(400).json({ message: 'Offer already exists' });
    }*/

    const result = await db.collection('jobOffres').insertOne({
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      name,
      postDate,
      startDate,
      nbrPost,
      generalInformation,
      responsibilities,
      requirements,
      commitment,
      salary
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
}