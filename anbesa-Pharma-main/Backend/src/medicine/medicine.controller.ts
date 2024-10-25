import { Body, Controller, Get, Post , Param, Put, Delete, UseGuards} from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { Medicine } from './schemas/medicine.schema';
import { CreateMedicineDto } from './dto/create.medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/schemas/user.schema';

@Controller('medicines')
export class MedicineController {
    constructor(private medicineService: MedicineService){}3
        
        @Get()

        async getAllMed(): Promise<Medicine[]>{
            return this.medicineService.findAll()
    }

    

    @Post('new')
    /* @Roles(Role.PHARMASCIT) */
     @UseGuards(AuthGuard())

    async createMedicine(
        @Body()
        medicine:CreateMedicineDto
    ): Promise<Medicine>{
        return this.medicineService.create(medicine)
    }

    @Get(':id')

        async getMed(
            @Param('id')
            id: string
        ): Promise<Medicine>{
            return this.medicineService.findById(id);
    }
    
    @Put(':id')
    @UseGuards(AuthGuard())
    async updateMedicine(
        @Param('id')
        id: string,
        @Body()
        medicine: UpdateMedicineDto,
        ):Promise<Medicine>{
            return this.medicineService.updateById(id , medicine);
        }

        @Delete(':id')
        @UseGuards(AuthGuard())
        /* @Roles(Role.PHARMASCIT) */

        async deleteMedicine(
            @Param('id')
            id: string,
        ): Promise<Medicine>{
            return this.medicineService.deleteById(id)
    }
    }
