#include <GL/glew.h>
#include <GLFW/glfw3.h>

#include <iostream>
#include <cstdlib>

#include "Rectangle.h"

#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtx/transform.hpp>

const float WINDOW_WIDTH{ 800 }, WINDOW_HEIGHT{ 600 };
const float cameraX{ 0.0f }, cameraY{ 0.0f }, cameraZ{ -10.0f };

glm::mat4 viewMat = glm::translate(glm::mat4(1.0f), glm::vec3(cameraX, cameraY, cameraZ));
glm::mat4 projectionMat = glm::perspective(glm::radians(60.0f), WINDOW_WIDTH / WINDOW_HEIGHT, 0.0001f, 100000.0f);

GLFWwindow* window = nullptr;

void Start();
void ProcessInput();
void Update();
void Render();

Rectangle* r1 = nullptr, * r2 = nullptr, * r3 = nullptr, *r4 = nullptr;

void key_callback(GLFWwindow*, int, int, int, int);

int main()
{
	if (!glfwInit())
	{
		std::cerr << "Could not initialize GLFW!" << std::endl;
		exit(EXIT_FAILURE);
	}

	std::cout << "Initialized GLFW succesfully" << std::endl;

	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 4);

	window = glfwCreateWindow(800, 600, "OpenGL", NULL, NULL);
	glfwMakeContextCurrent(window);

	if (glewInit() != GLEW_OK)
	{
		std::cerr << "Could not initialize GLEW!" << std::endl;
		exit(EXIT_FAILURE);
	}

	std::cout << "Initialized GLEW succesfully!" << std::endl;

	std::cout << "OpenGL version: " << glGetString(GL_VERSION) << "\nVendor: " << glGetString(GL_VENDOR)<<std::endl;

	glfwSwapInterval(1);

	Start();

	while (!glfwWindowShouldClose(window))
	{
		//Process all user inputs
		ProcessInput();

		//update the states before drawing
		Update();


		//Render onto the screen
		Render();
	
		glfwSwapBuffers(window);
	}

	delete r1, r2, r3, r4;

	glfwDestroyWindow(window);
	glfwTerminate();
}

void ProcessInput()
{
	glfwPollEvents();
}

void Start()
{
	glClearColor(0.3f, 0.2f, 0.3f, 1.0f);
	glfwSetKeyCallback(window, key_callback);

	r1 = new Rectangle(-0.5f, -0.5f, 1.0f, 1.0f);
	r1->set_color(1.0f, 0.0f, 0.0f);
	r2 = new Rectangle(2.0f, .5f);

	r3 = new Rectangle(-1.8f, 0.2f, 1.5f, 2.5f);
	r3->set_color(0.4f, 0.5f, 0.3f);

	r4 = new Rectangle(2.0f, 2.0f, 1.3f, 4.0f);
	r4->set_color(0.3f, 0.5f, 0.8f);
}

float change = 0.01f, red = 0.3f;
void Update()
{
	glClear(GL_COLOR_BUFFER_BIT);
	
	red += change;
	if (red > 1.0f)
		red = 0.0f;

	/*using namespace std::chrono_literals;
	
	std::this_thread::sleep_for(std::chrono::duration<float>(0.01s));*/

	r2->set_color(red, 0.4f, 0.5f);

	r1->set_color(1.0f, red, 0.3f);
}

void Render()
{
	r1->render();
	r2->render();
	r3->render();
	r4->render();
}

void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{

	if (key == GLFW_KEY_LEFT && action != GLFW_RELEASE)
	{
		r1->move(-0.1f, 0.0f);
	}
	if (key == GLFW_KEY_RIGHT && action != GLFW_RELEASE)
	{
		r1->move(0.1f, 0.0f);
	}
	if (key == GLFW_KEY_UP && action != GLFW_RELEASE)
	{
		r1->move(0.0f, 0.1f);
	}
	if (key == GLFW_KEY_DOWN && action != GLFW_RELEASE)
	{
		r1->move(0.0f, -0.1f);
	}
	
}