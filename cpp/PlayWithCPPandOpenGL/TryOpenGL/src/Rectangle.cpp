#include "Rectangle.h"
#include <fstream>
#include <string>

extern glm::mat4 projectionMat, viewMat;

Rectangle::Rectangle(float x, float y, float l, float b)
{
    o_x = x;
    o_y = y;
    this->l = l; 
    this->b = b;

    setup_vertices();
    compile_and_setup_shader();
    set_color(1.0f, 1.0f, 1.0f);
}

Rectangle::Rectangle(float l, float b)
{
    o_x = 0.0f;
    o_y = 0.0f;

    this->l = l;
    this->b = b;

    setup_vertices();
    compile_and_setup_shader();
    set_color(1.0f, 1.0f, 1.0f);

}

void Rectangle::setup_vertices() 
{

    float x = l / 2.0f;
    float y = b / 2.0f;

    float vertices[] = {
        o_x - x, o_y - y,
        o_x - x, o_y + y,
        o_x + x, o_y + y,
        o_x + x, o_y - y
    };

    unsigned int indices[] = {
        0, 1, 2,
        0, 2, 3
    };

    vbos = (GLuint*)alloca(sizeof(GLuint) * 2); //allocate size for two vbos ids on the stack

    glGenVertexArrays(1, &vao);
    glBindVertexArray(vao);

    glGenBuffers(2, vbos);
    glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
    glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 0, 0);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, vbos[1]);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);
    
    glEnableVertexAttribArray(0);

    glBindVertexArray(0);


    //Setup the model matrix
    modelMat = glm::translate(glm::mat4(1.0f), glm::vec3(o_x, o_y, 0.0f));
}

void Rectangle::compile_and_setup_shader() 
{
    const char* vShaderSource = nullptr, * fShaderSource = nullptr;

    std::string vs, fs, temp;

    std::ifstream vsFile("shaders/rect_vShader.shader", std::ios::in), fsFile("shaders/rect_fShader.shader", std::ios::in);

    while (getline(vsFile, temp))
    {
        vs += temp + "\n";
    }

    vsFile.close();

    while (getline(fsFile, temp))
    {
        fs += temp + "\n";
    }

    fsFile.close();

    vShaderSource = vs.c_str();
    fShaderSource = fs.c_str();

    GLuint vshader = glCreateShader(GL_VERTEX_SHADER), fshader = glCreateShader(GL_FRAGMENT_SHADER);

    glShaderSource(vshader, 1, &vShaderSource, NULL);
    glShaderSource(fshader, 1, &fShaderSource, NULL);

    glCompileShader(vshader); glCompileShader(fshader);

    shader = glCreateProgram();

    glAttachShader(shader, vshader);
    glAttachShader(shader, fshader);

    glLinkProgram(shader);
}

void Rectangle::render() 
{
    glm::mat4 mvMatrix = viewMat * modelMat;

    glUseProgram(shader);
    glBindVertexArray(vao);

    glUniformMatrix4fv(glGetUniformLocation(shader, "pMat"), 
                        1, GL_FALSE, glm::value_ptr(projectionMat));
    glUniformMatrix4fv(glGetUniformLocation(shader, "mvMat"), 
                        1, GL_FALSE, glm::value_ptr(mvMatrix));
    glUniform3fv(glGetUniformLocation(shader, "col"), 
                  1, glm::value_ptr(color));

    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
}

void Rectangle::move(float deltaX, float deltaY)
{
    modelMat = glm::translate(modelMat, glm::vec3(deltaX, deltaY, 0.0f));
}