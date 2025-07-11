import { MinedMineral } from './mineral';

export interface Mine {
  id: number;
  name: string;
  location: {
    long: number;
    lat: number;
  };
  mineral: MinedMineral[];
  status: 'active' | 'inactive' | 'closed' | 'under_exploration';
  year: number;
  environmental: {
    impact_level: 'medium';
    water_usage_m3_per_year: string;
    co2_emission_ton_per_year: string;
    waste_management: string;
    environmental_report_url: string;
  };
  production_history: [];
  operations: {
    employees: number;
    contractors: number;
    working_shifts: number;
    main_operator: string;
    safety_rating: string;
  };
  license: {
    license_id: string;
    issued_by: string;
    issued_year: number;
    valid_until: number;
    renewable: boolean;
  };
}
