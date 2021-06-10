"use strict";
const Movie = require('./models/jay_movie.model')

class movieController {
    //get /movie
    static async showAll(req, res){
        try {
            const movie = await Movie.find();
            res.render("movie",{movie});
            
        } catch (error) {
            req.status(500).send(error);
        }
    }
    //get /movie/:id
    static async showByID(req, res){
        const { id }= req.params;
        try {
            const movie = await Movie.findbyID(id);
            res.render("movie/showbyID",{movie});
            
        } catch (error) {
            req.status(404).send(error);
        }
    }
    //post /movie/add 
    static add(req, res){
        try{
            const movie = new Movie(req.body)
            Movie.save();
            res.status(201).send(error);
        }
        catch(error){
            res.status(400).send(error);
        }
    }
    //put /movie/edit 
    static async edit(req,res){
        const{id} =req.params;
        try {
            const movie = await Movie.findByIdAndUpdate(id, req.body);
            res.render('/movie/edit',{post});
            
        } catch (error) {
            res.status(400).send(error);
        }
    } 
    //delete /movie/delete
    static async delete(req,res){
        const{id} =req.params;
        try {
            const movie = await Movie.findOneAndDelete({_id: id});
            res.send(movie);
            
        } catch (error) {
            res.status(500).send(error);
        }
    } 
    
}
module.exports = MovieController;