interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface PhotosDetail {
  id: number;
  img_src: string;
  sol: number;
  camera: Camera;
  earth_date: string;
  rover: Rover;
}

export interface Photos {
  photos: Array<PhotosDetail>;
}
