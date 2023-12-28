export async function createProfilCompanyController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const {CompanyName,   CompanyDescription, Address,  EmployeesNumber, EstablishmentDate, email} = req.body;
  
      if (!CompanyName) {
        return res.status(400).json({ message: 'Company Name is required' });
      }
      
      if (!CompanyDescription) {
        return res.status(400).json({ message: 'Company description is required' });
      }
      
      if (!Address) {
        return res.status(400).json({ message: 'Company Address is required' });
      }
      
      if (EmployeesNumber && EmployeesNumber.length > 10) {
        return res.status(400).json({ message: 'Company Employees number must be > 100' });
      }
      
      if (!EstablishmentDate) {
        return res.status(400).json({ message: 'Establishment Date level is required' });
      }
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      
      
  
       //check if offer exists
  
     // const existingProfile = await db.collection(' profiles').findOne({
        //email: email.toLowerCase()
      //});
  
      //if (existingProfile) {
       // return res.status(400).json({ message: 'Profile already exists' }); 
      
  
      const result = await db.collection('CompanyProfile').insertOne({
        CompanyName ,
        CompanyDescription ,
        Address,
        EstablishmentDate,
        EmployeesNumber,
        email
        
      });
  
      console.log(result);
        res.status(200).json({ message: 'profile created' });
      } 
      
  
    
    catch (error) {
     
      res.status(500).json({ error: error.toString() });
    }
  }