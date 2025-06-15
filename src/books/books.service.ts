import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  findAll() {
    return this.bookRepository.find();
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) throw new NotFoundException('Livro não encontrado');
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.findOne(id);
    const updated = Object.assign(book, updateBookDto);
    return this.bookRepository.save(updated);
  }

  async remove(id: number) {
    const book = await this.findOne(id);
    return this.bookRepository.remove(book);
  }
}