import {SetMetadata} from '@nestjs/common'
import { Role } from './schemas/user.schema';

export const Roles = (...roles:Role[]) => SetMetadata('roles', roles);