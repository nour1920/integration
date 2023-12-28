

export async function createProfileController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const {firstName,  lastName, address,  phoneNumber, educationLevel, Experience} = req.body;
  
      if (!firstName) {
        return res.status(400).json({ message: 'Condidat Name is required' });
      }
      
      if (!lastName) {
        return res.status(400).json({ message: 'Condidat Name is required' });
      }
      
      if (!address) {
        return res.status(400).json({ message: 'Condidat Address is required' });
      }
      
      if (phoneNumber && phoneNumber.length > 10) {
        return res.status(400).json({ message: 'Condidat phoneNumber must be > 100' });
      }
      
      if (!educationLevel) {
        return res.status(400).json({ message: 'education level is required' });
      }
      
      if (!Experience) {
        return res.status(400).json({ message: 'exerience Information is required' });
      }
      
      
  
       //check if offer exists
  
     // const existingProfile = await db.collection(' profiles').findOne({
        //email: email.toLowerCase()
      //});
  
      //if (existingProfile) {
       // return res.status(400).json({ message: 'Profile already exists' }); 
      
  
      const result = await db.collection('condidatProfile').insertOne({
        firstName ,
        lastName ,
        address,
        phoneNumber,
        educationLevel,
        Experience
      });
  
      console.log(result);
        res.status(200).json({ message: 'profile created' });
      } 
      
  
    
    catch (error) {
     
      res.status(500).json({ error: error.toString() });
    }
  }