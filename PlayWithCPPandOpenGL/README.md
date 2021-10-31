# This is a graphics library (work is under progress)

This is a graphics library which is being made in just C++ with OpenGL (using GLEW) and GLFW for windowing and input etc. 

### A Video demonstration of what is currently contained in the project
![OpenGL 2021-10-26 20-21-54 00_00_00-00_00_30](https://user-images.githubusercontent.com/62141759/138905024-b9257ff2-270d-4d9d-a0d7-ed34a255ac5d.gif)

_Some rectangles drawn_

The rectangles can be hooked up with the input to make them interactable too.

# Pre-requisites for building the project
1) GLFW and GLEW.
2) Visual Studio.
3) GLM for maths stuff.
4) A graphics card compatible with OpenGL 4.0. 

# Steps to build
1) Clone the repository.
2) Double Click on the Visual Studio Solution (.sln) file, which is under the root directory of the project.
3) Once Visual Studio loads up, make sure that you're building under x86 architecture, and that you're linking against the dlls or the static GLFW and GLEW libraries for Visual Studio.
4) Press `Ctrl + Shift + B` or hit build.
5) Click on *Run*.
6) The sample would run.
