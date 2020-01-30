import typing
import collections
import csv
import os

class Project:
	def __init__(self, email:str, title:str, desc:str, drive:str, vid:str, team:str, ghub:str="", web:str=""):
		self.email = email
		self.title = title
		self.desc = desc
		self.drive = drive
		self.vid = vid
		self.team = team
		self.ghub = ghub
		self.web = web


def parseVidUrl(url):
	result = ""

	# if it's a short link just take the hash after the last '/'
	if url.find("youtu.be") != -1:
		result = url.split('/')[-1]
	if url.find("watch?v=") != -1:
		# get the hash after "watch?v="
		result = url.split('=')[1]

	# if there's still other queries drop them
	result = result.split('&')[0]

	return result

def titleToFileName(title):
	result = str(title)

	# replace annoying chars
	result = result.replace(" ", "_")
	result = result.replace(":", "_")
	result = result.replace("/", "-")
	result = result.replace("(", "-")
	result = result.replace(")", "-")

	return result

def main():
	# create dict to hold projects
	projects = collections.defaultdict()

	# load csv file
	with open('fa19_projects.csv', newline='') as csvfile:
		reader = csv.reader(csvfile, delimiter=',', quotechar='\"')
		for idx, row in enumerate(reader):
			# skip header row
			if idx == 0:
				continue

			# create Project object
			email = row[1]
			title = row[2]
			desc = row[3]
			drive = row[4]
			vid = parseVidUrl(row[5])
			ghub = row[9]
			web = row[10]
			team = row[12]

			projects[team] = Project(email, title, desc, drive, vid, team, ghub, web)

	# make an output folder for all the markdowns
	if not os.path.exists("./out"):
		os.mkdir("./out")

	# loop through all the projects
	for team, project in projects.items():
		# create a new file
		md_file_name = "FA19-" + titleToFileName(project.title) + ".md"

		f= open("./out/" + md_file_name,"w+")

		# print content in markdown format
		f.write("---\n")
		f.write("layout: project\n")
		f.write("title: " + project.title + "\n")
		f.write("desc: " + project.desc + "\n")
		f.write("dl: " + project.drive + "\n")
		f.write("semester: Fall 2019\n")
		f.write("team: " + project.team + "\n")
		f.write("youtube: " + project.vid + "\n")
		f.write("featured: false\n")

		f.write("---\n")
		# close the file
		f.close()

		# break


if __name__== "__main__":
	main()