import { useRef, useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
import StudioEditor from "@grapesjs/studio-sdk/react";
import {
  canvasFullSize,
  layoutSidebarButtons,
} from "@grapesjs/studio-sdk-plugins";
import "@grapesjs/studio-sdk/style";

// Import React renderer plugin for the editor
import rendererReact from "@grapesjs/studio-sdk-plugins/dist/rendererReact";

// Import React renderer for the project JSON
import { RenderProject } from "@grapesjs/studio-sdk-plugins/dist/rendererReact/rendererProject";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import AppBadge from "../components/AppBadge";
import { createRoot } from "react-dom/client";
import { registerCustomBlocks } from "../blocks/customBlocks";
import ServiceProviderSlider from "../components/ServiceProvider";

export default function Editor() {
  const iframeRef = useRef(null);
  const [root, setRoot] = useState();
  const [pageId, setPageId] = useState("");
  const [projectData, setProjectData] = useState();
  // console.log(projectData);

  // For the demo purpose
  useEffect(() => {
    const iframeEl = iframeRef.current;
    // @ts-ignore
    const iframeDoc = iframeEl?.contentDocument;
    if (iframeDoc && !iframeDoc.__ReactRoot) {
      const root = createRoot(iframeDoc);
      // @ts-ignore
      setRoot(root);
      iframeDoc.__ReactRoot = root;
    }
  }, [iframeRef.current]);
  useEffect(() => {
    const iframeEl = iframeRef.current;
    if (!iframeEl) return;

    const adjustHeight = () => {
      // @ts-ignore
      const iframeDoc = iframeEl.contentDocument;
      if (iframeDoc) {
        const body = iframeDoc.body;
        // @ts-ignore
        iframeEl.style.height = body.scrollHeight + "px";
      }
    };
    // @ts-ignore
    iframeEl.addEventListener("load", adjustHeight);
    const interval = setInterval(adjustHeight, 500); // in case content changes

    return () => {
      // @ts-ignore
      iframeEl.removeEventListener("load", adjustHeight);
      clearInterval(interval);
    };
  }, [iframeRef]);

  useEffect(() => {
    if (!root || !projectData) return;
    // @ts-ignore
    root.render(
      <RenderProject
        projectData={projectData}
        config={reactRendererConfig}
        pageId={pageId}
      />,
    );
  }, [projectData, root, pageId]);
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // @ts-ignore
    const doc = iframe.contentDocument;
    if (!doc) return;

    // Copy all stylesheets from parent to iframe
    const styles = Array.from(document.styleSheets);

    styles.forEach((styleSheet) => {
      try {
        const css = Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join("");

        const styleEl = doc.createElement("style");
        styleEl.innerHTML = css;
        doc.head.appendChild(styleEl);
      } catch {
        // ignore CORS stylesheets
      }
    });
  }, []);

  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <StudioEditor
          options={{
            gjsOptions: { storageManager: false },
            licenseKey:
              "9a090a8a3ca142e3b8937425024fb2970f9857838eaf4820ae6f91740c48ac88",
            // @ts-ignore
            onReady: (editor) => setProjectData(editor.getProjectData()),
            project: { type: "react" },
            layout: layoutSidebarButtons.createLayoutConfig(),
            plugins: [
              // Initialize the React renderer for the editor
              rendererReact.init({
                ...reactRendererConfig,
                bodyAfter: undefined,
              }),

              // Optional plugins
              layoutSidebarButtons.init({ skipLayoutConfig: true }),
              canvasFullSize,
              (editor) => {
                editor.on(editor.Pages.events.select, (page) =>
                  setPageId(page.id),
                );
                registerCustomBlocks(editor);

                // Add a custom block with a React component
                editor.Blocks.add(
                  "feature",
                  {
                    label: "Feature component",
                    category: "React",
                    // @ts-ignore
                    full: true,
                    content: (
                      <Feature
                        title="Feature title"
                        description="Feature description"
                      />
                    ),
                  },
                  { at: 0 },
                );
                editor.Blocks.add(
                  "Card",
                  {
                    label: "Card component",
                    category: "React",
                    // @ts-ignore
                    full: true,
                    content: (
                      <Button
                      // title="Feature title"
                      // description="Feature description"
                      />
                    ),
                  },
                  { at: 0 },
                );
                editor.Blocks.add(
                  "Service Provider",
                  {
                    label: "Service Provider Component",
                    category: "React",
                    // @ts-ignore
                    full: true,
                    content: (
                      <ServiceProviderSlider
                      // title="Feature title"
                      // description="Feature description"
                      />
                    ),
                  },
                  { at: 0 },
                );
              },
            ],
            storage: {
              type: "self",
              // @ts-ignore
              onSave: ({ project }) => setProjectData(project),
              // Load default project data
              // @ts-ignore
              onLoad: () => ({
                project: {
                  pages: [
                    {
                      name: "Page from React",
                      component: (
                        <>
                          <Hero
                            title="Build Visually with React"
                            subtitle="A seamless editing experience using your components"
                          />
                          <Section id="" className={""}>
                            <h2
                              data-gjs-type="heading"
                              style={{ textAlign: "center", fontSize: "2rem" }}
                            >
                              Features
                            </h2>
                            <Feature
                              title="Modular Components"
                              description="Build and edit with reusable UI blocks."
                            />
                            <Feature
                              title="HTML to React"
                              description="Convert legacy HTML into structured React."
                            />
                            <Button label="Get Started" href="##" />
                          </Section>
                        </>
                      ),
                    },
                  ],
                },
              }),
            },
          }}
        />
      </div>
      <div style={{ width: "100vw", height: "100vh", marginTop: "1rem" }}>
        <h2 style={{ padding: "0.5rem 1rem", margin: 0 }}>Project Renderer</h2>{" "}
        <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
          <iframe
            ref={iframeRef}
            style={{
              width: "100%",
              height: "100%", // subtract h2 height
              background: "#fff",
              border: "none",
              borderRadius: "0.375rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Same options used both for the editor and the project renderer
export const reactRendererConfig = {
  components: {
    Hero: {
      component: Hero,
      props: () => [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        {
          name: "subtitle",
          type: "text",
          label: "Subtitle",
          value: "Default Subtitle",
        },
      ],
      allowChildren: true,
      // Use GrapesJS properties to control the component's behavior
      model: {
        defaults: {
          copyable: false,
          draggable: false,
          removable: false,
        },
      },
      // Custom editor render function
      // @ts-ignore
      editorRender: ({ connectDom, children, editor, component, props }) => {
        const handleNewComponent = () => {
          const cmp = component.append(
            <div data-gjs-type="text" style={{ padding: "1.25rem 2rem" }}>
              New Text Component
            </div>,
          )[0];
          editor.select(cmp, { activate: true });
        };

        return (
          <div ref={connectDom}>
            <Hero {...props}>
              {children || (
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "1.25rem 2rem",
                    borderRadius: "0.75rem",
                    display: "inline-block",
                    color: "#f3f4f6",
                    fontSize: "1rem",
                  }}
                >
                  Drop here your components or{" "}
                  <button
                    onClick={handleNewComponent}
                    style={{
                      backgroundColor: "#f9fafb",
                      color: "#4f46e5",
                      padding: "0.5rem 1rem",
                      borderRadius: "999px",
                      border: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Create new
                  </button>
                </div>
              )}
            </Hero>
          </div>
        );
      },
    },
    Section: {
      component: Section,
      allowChildren: true,
      // This options enable the component to be styleable via Style Manager
      allowPropId: true,
      allowPropClassName: true,
      model: {
        defaults: {
          unstylable: ["background-color", "padding", "margin"],
        },
      },
    },
    Feature: {
      wrapperStyle: { display: "block" },
      props: () => [
        { name: "title", type: "text", value: "Default Feature Title" },
        { name: "description", type: "text", value: "Default Description" },
      ],
      component: Feature,
    },
    Button: {
      wrapperStyle: { display: "inline-block" },
      props: () => [
        { name: "label", type: "text", value: "Button" },
        { name: "href", type: "href" },
      ],
      component: Button,
    },
    ServiceProviderSlider: {
      wrapperStyle: { display: "inline-block" },
      props: () => [
        { name: "label", type: "text", value: "Button" },
        { name: "href", type: "href" },
      ],
      component: ServiceProviderSlider,
    },
  },
  bodyAfter: () => <AppBadge />,
  styles: `
    html, body, #root {
      height: 100vh;
      margin: 0;
    }
  `,
};
