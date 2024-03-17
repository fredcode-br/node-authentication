import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { BadRequestError } from "../helpers/api-errors";

export class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const userExists = await userRepository.findOneBy({ email });

        if (userExists) {
            throw new BadRequestError('Email já existe no sistema');
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword,
        });

        await userRepository.save(newUser);

        const { password: _, ...user } = newUser;

        return res.status(201).json(user);
    }
}