import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { IndustryType } from './profile.entity';
import { Type } from 'class-transformer';

export class SSProfileDTO {
  @IsNotEmpty()
  commStyle: string;

  @IsNotEmpty()
  conflictHandlingMethod: string;

  @IsNotEmpty()
  listeningLvl: number;

  @IsNotEmpty()
  verbalLvl: number;

  @IsNotEmpty()
  writtenLvl: number;

  @IsNotEmpty()
  collabLvl: number;

  @IsNotEmpty()
  conflictResolutionLvl: number;

  @IsNotEmpty()
  leadershipLvl: number;
}

export class FEProfileDTO {
  @IsNotEmpty()
  fws: string[];

  @IsInt()
  @IsOptional()
  jsLvl?: number;

  @IsInt()
  @IsOptional()
  tsLvl?: number;

  @IsInt()
  @IsOptional()
  htmlLvl?: number;

  @IsInt()
  @IsOptional()
  cssLvl?: number;

  @IsNotEmpty()
  tools: string[];
}

export class BEProfileDTO {
  @IsNotEmpty()
  fws: string[];

  @IsNotEmpty()
  plangs: string[];

  @IsNotEmpty()
  dockerLvl: number;

  @IsNotEmpty()
  kuberLvl: number;

  @IsNotEmpty()
  awsAzureGcpLvl: number;

  @IsNotEmpty()
  sqlLvl: number;
}

export class ProfileDTO {
  @IsNotEmpty()
  xp: number;

  @IsNotEmpty()
  indType: IndustryType;

  @ValidateNested()
  @Type(() => SSProfileDTO)
  @IsNotEmpty()
  ssProfile: SSProfileDTO;

  @ValidateNested()
  @Type(() => FEProfileDTO)
  feProfile: FEProfileDTO;

  @ValidateNested()
  @Type(() => BEProfileDTO)
  beProfile: BEProfileDTO;

  beProfileId?: number;
  feProfileId?: number;
  ssProfileId?: number;
}
