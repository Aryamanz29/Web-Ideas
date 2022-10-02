#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/ext.hpp>

#include <iostream>
#include <cstdlib>
#include <string>
#include <fstream>

GLuint vao, vbo, shader;

GLuint vao1, vbo1;
void CompileShader();

glm::mat4 m, view, p, mvp;

void init(GLFWwindow* window) 
{ 
	//quad
	/*float vertices[] = {
		-.5f, -.5f,
		-.5f, .5f, 
		.5f, .5f, 
		.5f, -.5f
	};*/

	//triangle
	float vertices[] = {
		-.5f, -.5f,
		-.5f, .5f,
		.5f, .5f
	};

	glGenVertexArrays(1, &vao);
	glBindVertexArray(vao);
	glGenBuffers(1, &vbo);
	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
	glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(0);
	glBindVertexArray(0);

	float v[] = {
		-.5f, -.5f,
		.5f, -.5f,
		.5f, .5f
	};

	glGenVertexArrays(1, &vao1);
	glBindVertexArray(vao1);
	glGenBuffers(1, &vbo1);
	glBindBuffer(GL_ARRAY_BUFFER, vbo1);
	glBufferData(GL_ARRAY_BUFFER, sizeof(v), v, GL_STATIC_DRAW);
	glBindBuffer(GL_ARRAY_BUFFER, vbo1);
	glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 0, 0);
	glEnableVertexAttribArray(0);
	glBindVertexArray(0);
	CompileShader();


	
	view = glm::translate(glm::mat4(1.0f), glm::vec3(0.0f, 0.0f, -2.0f));
	p = glm::perspective(glm::radians(60.0f), 4.0f / 3.0f, 0.0001f, 10000.0f);
}

void display(GLFWwindow* window, double currentTime) 
{
	glClearColor(1.0, 0.0, 0.0, 1.0);
	glClear(GL_COLOR_BUFFER_BIT);

	glUseProgram(shader);


	m = glm::translate(glm::mat4(1.0f), glm::vec3((float)currentTime, 0.0f, 0.0f));
	mvp = p * view * m;

	glUniformMatrix4fv(glGetUniformLocation(shader, "mvpMat"), 1, GL_FALSE, glm::value_ptr(mvp));

	glBindVertexArray(vao);

	glDrawArrays(GL_TRIANGLES, 0, 3);
	
	glBindVertexArray(vao1);
	glDrawArrays(GL_TRIANGLES, 0, 3);
}
int main(void) 
{
	if (!glfwInit()) 
	{ 
		exit(EXIT_FAILURE); 
	}

	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);

	GLFWwindow* window = glfwCreateWindow(800, 600, "Chapter2 - program1", NULL, NULL);
	glfwMakeContextCurrent(window);

	if (glewInit() != GLEW_OK) 
	{ 
		exit(EXIT_FAILURE); 
	}

	glfwSwapInterval(1);

	init(window);

	while (!glfwWindowShouldClose(window)) 
	{
		display(window, glfwGetTime());
		glfwSwapBuffers(window);
		glfwPollEvents();
	}

	glfwDestroyWindow(window);
	glfwTerminate();

	exit(EXIT_SUCCESS);
}

void CompileShader()
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