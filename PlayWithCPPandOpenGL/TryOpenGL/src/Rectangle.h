#pragma once
#include "Shape.h"



class Rectangle :
    public Shape
{
public:

    Rectangle(float x, float y, float l, float b);

    Rectangle(float l, float b);

    void render() override;

    void move(float deltaX, float deltaY);


private:
    float l, b;
    

private:
   
    void setup_vertices() override;
    void compile_and_setup_shader() override;
};

