#pragma once

#include <GL/glew.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/ext.hpp>


class Shape
{
protected:
	float o_x, o_y;
	GLuint vao, shader;
	GLuint* vbos;

	glm::mat4 modelMat;
	glm::vec3 color;

protected:
	virtual void setup_vertices() = 0;
	virtual void compile_and_setup_shader() = 0;
	virtual void render() = 0;

public:
	void set_color(float r, float g, float b);
};

