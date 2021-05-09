import { Response ,Request} from "express";
import BilledServicesService from "../services/BilledServicesService";

class BilledServicesController {
  async create(request: Request,response: Response): Promise<Response> {
    // const user_id = request.user.id;

    const {
      description,
    } = request.body;

    
    const billedServicesService = new BilledServicesService();

    try {

      const service = await billedServicesService.execute({
        order: description
       });

      return response.json(service);

    }catch(err){
      return response.status(400).json({message:err.message});
    }
    
  }

}

export default BilledServicesController ;










