#include <bits/stdc++.h>
#include <dos.h>
#include <iostream>
using namespace std;

class Simple_Cacl
{
protected:
    int i, j;

public:
    int sum = 0, mul = 1, div = 1, sub = 0;
    void setdataS(int a, int b)
    {
        i = a;
        j = b;
    }

    void Addition()
    {
        sum = i + j;
        cout << i << " + " << j << " = " << sum;
    }
    void Subtraction()
    {
        sub = i - j;
        cout << i << " - " << j << " = " << sub;
    }
    void division()

    {
        div = i / j;
        cout << i << " / " << j << " = " << div;
    }
    void multiplication()
    {
        mul = i * j;
        cout << i << " * " << j << " = " << mul;
    }
};

class scientific_calc
{
protected:
    int i, j;

public:
    void setdataSC(int a, int b)
    {
        i = a;
        j = b;
    }

    float logs = 0, e = 0, sq = 0;

    int logrithm()
    {
        logs = log(i);
        cout << "log(" << i << ") = " << logs;
        return 0;
    }

    void exponential()
    {
        e = exp(i);
        cout << "exp(" << i << ") = " << e;
    }

    void squareRoot()
    {
        sq = sqrt(i);
        cout << "The squareRoot of a number is = " << sq;
    }
};

class Hybrid_Calc : public Simple_Cacl, public scientific_calc
{
public:
    void display_Simple_Calc();
    void display_Scientific_Calc();
    void Matrix();
};

void Hybrid_Calc::Matrix()
{
    int n, m, h, k, i, j;

    cout << "Enter the Rows and Coloumn of 1st Matrix :-\n";
    cin >> n >> m;
    cout << "Enter the Rows and Coloumn of 2nd Matrix :- \n";
    cin >> h >> k;
    int a[100][100];
    int b[100][100];
    int sum[100][100];
    int mul[100][100];

    cout << "Enter the 1st matrix :-\n";
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < m; j++)
            cin >> a[i][j];
    }

    cout << "Enter the 2nd matrix :-\n";
    for (i = 0; i < h; i++)
    {
        for (j = 0; j < k; j++)
            cin >> b[i][j];
    }

    cout << "If you want to Add Two matrix press (+)\n";
    cout << "If you want to Subtract Two matrix press (-)\n";
    cout << "If you want to Multiply  Two matrix press (*)\n";
    cout << "If you want Transpose Matrix press (T)\n";

    char c;
    cin >> c;
    if (c == '+')
    {
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                sum[i][j] = a[i][j] + b[i][j];
        }
        cout << "The Resultant matrix is :\n\n";
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                cout << sum[i][j] << " ";

            cout << "\n";
        }
    }
    else if (c == '-')
    {
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                sum[i][j] = a[i][j] - b[i][j];
        }
        cout << "The Resultant matrix is :\n\n";
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                cout << sum[i][j] << " ";

            cout << "\n";
        }
    }
    else if (c == '*')
    {
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
            {
                mul[i][j] = 0;
                for (int v = 0; v < k; v++)
                    mul[i][j] += a[i][j] * b[i][j];
            }
        }
        cout << "The Resultant matrix is :\n\n";
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                cout << mul[i][j] << " ";

            cout << "\n";
        }
    }
    else if (c == 'T')
    {
        char cx;
        cout << "For matrix 1 press (A) and for 2 press (B) \n";
        cin >> cx;

        if (cx == 'A' or cx == 'a')
        {
            for (int i = 0; i < h; ++i)
                for (int j = 0; j < k; ++j)
                    sum[j][i] = a[i][j];
        }

        if (cx == 'B' or 'b')
        {
            for (int i = 0; i < h; ++i)
                for (int j = 0; j < k; ++j)
                    sum[j][i] = b[i][j];
        }
        cout << "The Resultant matrix is :\n\n";
        for (i = 0; i < h; i++)
        {
            for (j = 0; j < k; j++)
                cout << sum[i][j] << " ";

            cout << "\n";
        }
    }

    else
        cout << "Wrong value entered";
}

void Hybrid_Calc ::display_Scientific_Calc()
{
    char choice;

    cout << "1.For Logrithmic value Press(1)\n";
    cout << "2.For Exponetial value Press(2)\n";
    cout << "3.For Square Root Press(3)\n";
    cin >> choice;

    if (choice == '1')
        logrithm();
    else if (choice == '2')
        exponential();
    else if (choice == '3')
        squareRoot();
}
void Hybrid_Calc ::display_Simple_Calc()
{

    char choice;
    cout << "What you want to do \n\n";
    cout << "1.For Addition  Press (+)\n";
    cout << "2.For Subtraction Press(-)\n";
    cout << "3.For Multiplication Press(*)\n";
    cout << "4.For Division Press(/)\n";

    cin >> choice;

    if (choice == '+')
        Addition();
    else if (choice == '-')
        Subtraction();
    else if (choice == '*')
        multiplication();
    else if (choice == '/')
        division();
    else
        cout << "Wrong value entered";
}

int main()
{

    Hybrid_Calc h;
    int a, b, c;
    cout << "-------- SCIENTIFIC CALCULATOR --------\n\n";
    cout << "If you want to perform (+,-,/,*)\n";
    cout << "Then press ( 1 )\n\n";
    cout << "If you want to perform log,exp,sqrt\n";
    cout << "Then press(2)\n\n";
    cout << "If you Want to do operations in matrix \n";
    cout << "Then press(3)\n\n";
    cin >> c;

    if (c == 1)
    {
        cout << "Enter two numbers\n";
        cin >> a >> b;
        h.setdataS(a, b);
        h.display_Simple_Calc();
    }
    else if (c == 2)
    {
        cout << "Enter one numbers\n";
        cin >> a;
        h.setdataSC(a, b = 0);
        h.display_Scientific_Calc();
    }
    else if (c == 3)
        h.Matrix();

    else
    {
        cout << "Wrong value entered";
    }
    return 0;
}