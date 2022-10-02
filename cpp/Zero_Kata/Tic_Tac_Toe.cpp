#include <bits/stdc++.h>
#include <iostream>
#include <string>
#include <conio.h>
#include <windows.h>
#include <mmsystem.h>
#include <ctime>
int ct = 0;
int coun = 0;
char mrr[9], choice2;
char arr[9], choice;
using namespace std;
//Function to delay the time
bool Wait(const unsigned long &Time)
{
    clock_t Tick = clock_t(float(clock()) / float(CLOCKS_PER_SEC) * 1000.f);
    if (Tick < 0) // if clock() fails, it returns -1
        return 0;
    clock_t Now = clock_t(float(clock()) / float(CLOCKS_PER_SEC) * 1000.f);
    if (Now < 0)
        return 0;
    while ((Now - Tick) < Time)
    {
        Now = clock_t(float(clock()) / float(CLOCKS_PER_SEC) * 1000.f);
        if (Now < 0)
            return 0;
    }
    return 1;
}

void check_matrix_1(char matrix[][3], char P1, string N1) //Checking matrix for player number 1
{
    int r, c, d;

    // ROW check for Player Number  1
    for (int i = 0; i < 3; i++)
    {
        r = 0;
        for (int j = 0; j < 3; j++)
        {
            if ((matrix[0][0] == P1) && (matrix[0][1] == P1) && (matrix[0][2] == P1))
                r++;
            else if ((matrix[1][0] == P1) && (matrix[1][1] == P1) && (matrix[1][2] == P1))
                r++;
            else if ((matrix[2][0] == P1) && (matrix[2][1] == P1) && (matrix[2][2] == P1))
                r++;
        }
    }

    // Column check for Player Number 1
    for (int i = 0; i < 3; i++)
    {
        c = 0;
        for (int j = 0; j < 3; j++)
        {
            if ((matrix[0][0] == P1) && (matrix[1][0] == P1) && (matrix[2][0] == P1))
                c++;
            else if ((matrix[0][1] == P1) && (matrix[1][1] == P1) && (matrix[2][1] == P1))
                c++;
            else if ((matrix[0][2] == P1) && (matrix[1][2] == P1) && (matrix[2][2] == P1))
                c++;
        }
    }

    //Diagonal Check

    for (int i = 0; i < 3; i++)
    {
        d = 0;
        for (int j = 0; j < 3; j++)
        {
            if (matrix[0][0] == P1 && matrix[1][1] == P1 && matrix[2][2] == P1)
                d++;
            else if (matrix[0][2] == P1 && matrix[1][1] == P1 && matrix[2][0] == P1)
                d++;
        }
    }

    if (r == 3 || c == 3 || d == 3)
    {
        cout << "Result :-" << N1 << " WINS\n\n";
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
                cout << matrix[i][j] << "\t";

            cout << "\n";
        }
        PlaySound(TEXT("E:\\project\\Music\\A.wav"),NULL,SND_SYNC);
        getch();
        exit(1);
    }

    int x_c = 0; // If No one wins

    for (int i = 0; i < 3; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] == P1)
                x_c++;
        }
    }

    if ((x_c > 4))
    {   PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
        cout << "No One Wins\n";
        getch();
        exit(1);
    }
}

void check_Matrix_2(char matrix[][3], char P2, string N2)
{
    int r, c, d;

    // ROW check for Player Number  2

    for (int i = 0; i < 3; i++)
    {
        r = 0;
        for (int j = 0; j < 3; j++)
        {
            if ((matrix[0][0] == P2) && (matrix[0][1] == P2) && (matrix[0][2] == P2))
                r++;
            else if ((matrix[1][0] == P2) && (matrix[1][1] == P2) && (matrix[1][2] == P2))
                r++;
            else if ((matrix[2][0] == P2) && (matrix[2][1] == P2) && (matrix[2][2] == P2))
                r++;
        }
    }
    // Column check for Player Number 2
    for (int i = 0; i < 3; i++)
    {
        c = 0;
        for (int j = 0; j < 3; j++)
        {
            if ((matrix[0][0] == P2) && (matrix[1][0] == P2) && (matrix[2][0] == P2))
                c++;
            else if ((matrix[0][1] == P2) && (matrix[1][1] == P2) && (matrix[2][1] == P2))
                c++;
            else if ((matrix[0][2] == P2) && (matrix[1][2] == P2) && (matrix[2][2] == P2))
                c++;
        }
    }
    //Diagonal Check
    for (int i = 0; i < 3; i++)
    {
        d = 0;
        for (int j = 0; j < 3; j++)
        {
            if (matrix[0][0] == P2 && matrix[1][1] == P2 && matrix[2][2] == P2)
                d++;
            else if (matrix[0][2] == P2 && matrix[1][1] == P2 && matrix[2][0] == P2)
                d++;
        }
    }

    if (r == 3 || c == 3 || d == 3)
    {
        cout << "Result :-" << N2 << " Wins\n\n";

        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
                cout << matrix[i][j] << "\t";

            cout << "\n";
        }
        PlaySound(TEXT("E:\\project\\Music\\A.wav"),NULL,SND_SYNC);
        getch();
        exit(1);
    }

    int x_c = 0;

    for (int i = 0; i < 3; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            if (matrix[i][j] == P2)
                x_c++;
        }
    }
    if ((x_c > 4))
    {   PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
        cout << "No One Wins\n";
        getch();
        exit(1);
    }
   
}

void print_matrix_2(char matrix[][3]) // Printing Matrix of Player 2
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {   
            cout << matrix[i][j] << "\t";
        }
        cout << "\n";
    }
}
void set_position_2(char matrix[][3], char choice2, char P2, string N2) // Setting  Matrix of Player 2
{
    for (int i = 0; i <3; i++)
    {
        for (int j = 0; j <3; j++)
        {

            if (choice2 == matrix[i][j])
                matrix[i][j] = P2;
        }
    }
    check_Matrix_2(matrix, P2, N2);
    print_matrix_2(matrix);
}
void print_matrix(char matrix[][3], char P2, string N2, string N1) // Printing Matrix of Player 1
{
    char c, p;
    char a;

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j <3; j++)
        {
            cout << matrix[i][j] << "\t";
        }
        cout << "\n";
    }

label:
    cout << N2 << " Choose the Position\n";
    cin >> choice2;
    ct++;
    a = choice2;
    for (int i = ct; i <=ct; i++)
    {
        mrr[i] = a;
    }
 
    //Check the positon of both players
    for (int i = 0; i <=ct; i++)
    {
        if (a == mrr[i])
        {
            for (int j = 0; j <ct; j++)
            {
                if (a == arr[j])
                {   PlaySound(TEXT("E:\\project\\Music\\W.wav"),NULL,SND_SYNC);
                    cout << N2 << "Already Entered this value\n";
                    cout << "Want to re-enter the choice(Y/N)\n";
                    cin >> p;
                    if (p == 'Y' || p == 'y')
                        goto label;
                    else if (p == 'N' || p == 'n')
                    {   PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
                        cout << N2 << " Loose";
                        getch();
                        exit(1);
                    }
                }
            }
        }
    }
    //Check the position of single player(N2)
    for (int i = 1; i <ct; i++)
    {
        if (mrr[i] == choice2 && ct != 1)
        {   PlaySound(TEXT("E:\\project\\Music\\W.wav"),NULL,SND_SYNC);
            cout << "\nValue already entered\n";
            cout << "Want to re-enter the choice(Y/N)\n";
            cin >> c;
            if (c == 'Y' || c == 'y')
                goto label;
            else if (c == 'N' || c == 'n')
            {
                cout << N2 << " Loose";
                PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
                getch();
                exit(1);
            }
        }
    }
    set_position_2(matrix, choice2, P2, N2);
}
int set_position(char matrix[][3], char choice, char P1, char P2, string N2, string N1) // Setting  Matrix of Player 1
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (choice == matrix[i][j])
                matrix[i][j] = P1;
        }
    }
    check_matrix_1(matrix, P1, N1);
    print_matrix(matrix, P2, N2, N1);
    return 0;
}
int main()
{
    int n, m, i, j;
    char matrix[3][3] = {{'1', '2', '3'}, //Position matrix
                         {'4', '5', '6'},
                         {'7', '8', '9'}};

    char O = '0';
    char X = 'X';
    cout << "---------------------------------------------------------------\n";
    cout << "--------------------TIC-----TAC-----TOE------------------------\n";
    cout << "---------------------------------------------------------------\n\n";
    PlaySound(TEXT("E:\\project\\Music\\KBC.wav"),NULL,SND_SYNC);
    if (!Wait(1000)) //Delay funtion

    cout << "Instructions of the GAME:- \n\n";
    cout << "1.Choose the position from the position chart.\n";
    cout << "2.Choose between 0 and X.\n";
    cout << "3.Do not re-enter the same value.\n";
    cout << "4.Do not re-enter each other value.\n\n";
    cout << "This is the Position Chart :- \n";
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            cout << matrix[i][j] << "\t";

        cout << "\n";
    }

    char P1, P2;
    string N1, N2; //Variables for player name
    cout << "Player 1 enter your Name \n";
    cin >> N1;
    cout << "Player 2 enter your Name\n";
    cin >> N2;
    cout << "\n";
   
    cout << "Player 1 :-" << N1 << endl;
    cout << "Player 2 :-" << N2 << "\n\n";
    cout << "For " << N1 << " :-\n\n";

    cout << "1.To choose X Press(X)\n";
    cout << "2.To Choose 0 Press(0)\n";
    cin >> P1;
    cout << "\n";
    if (P1 == 'X')
        P2 = O;
    else if (P1 == '0')
        P2 = X;

    cout << N1 << " chooses :- " << P1 << endl;
    cout << N2 << " chooses :- " << P2 << "\n\n";
    char choice, c[9];
    char z, v;
    char a[9];
    cout << "All the best " << N1 << " and " << N2 << "\n\n";
     PlaySound(TEXT("E:\\project\\Music\\tg.wav"),NULL,SND_SYNC);
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j <=3; j++)
        {
        label:
            cout << N1 << " Choose position \n";
            cin >> choice;
            //Checking the position
            coun++;

            char b = choice;
            for (int i = coun; i <= coun; i++)
                arr[i] = b;
            for (int i = 0; i <=coun; i++)
            {
                if (b == arr[i])
                {
                    for (j = 0; j < coun; j++)
                    {
                        if (b == mrr[j])
                        {   PlaySound(TEXT("E:\\project\\Music\\W.wav"),NULL,SND_SYNC);
                            cout << N2 << " Already Entered this value\n";
                            cout << "Want to re-enter the choice(Y/N)\n";
                            cin >> v;
                            if (v == 'Y' || v == 'y')
                                goto label;
                            else if (v == 'N' || v == 'n')
                            {
                                cout << N1 << " Loose";
                                 PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
                                getch();
                                exit(1);
                            }
                        }
                    }
                }
            }
            for (int i = 1; i <coun; i++)
            {
                if (arr[i] == choice && coun != 1)
                {   PlaySound(TEXT("E:\\project\\Music\\W.wav"),NULL,SND_SYNC);
                    cout << "Value already entered\n";
                    cout << "Want to re-enter the choice(Y/N)\n";
                    cin >> z;
                    if (z == 'Y' || z == 'y')
                    {
                        goto label;
                    }
                    else if (z == 'N' || z == 'n')
                    {   
                        cout << N1 << " Loose";
                        PlaySound(TEXT("E:\\project\\Music\\lose.wav"),NULL,SND_SYNC);
                        getch();
                        exit(1);
                    }
                }
            }
         
            set_position(matrix, choice, P1, P2, N2, N1);
        }
    }

}

