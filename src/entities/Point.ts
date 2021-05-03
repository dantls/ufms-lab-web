import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";


@Entity("points")
class Point {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image: string;

  @Column()
  phone: string;

  @Column()
  whatsapp: string;

  @Column({
    type: "varchar",
    length: 2,
  })
  uf: string;

  @Column()
  city: string;
  
  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @JoinColumn({name: "user_id"})
  @ManyToOne(()=> User)
  user: User;

  @Column()
  user_id: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {Point}